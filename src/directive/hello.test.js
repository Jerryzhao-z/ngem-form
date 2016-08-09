describe("hello test", function() {
    var $compile;
    var $scope;

    beforeEach(angular.mock.module('ngemForm'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }));

    it("should render a hello title", inject(function() {
        var template = $compile("<div hello></div>")($scope);

        $scope.$digest();
        var templateAsHtml = template.html();

        expect(templateAsHtml).toContain("hello");

    }));
});