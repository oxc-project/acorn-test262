emitSuperCallBeforeEmitPropertyDeclarationAndParameterPropertyDeclaration1ES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 195,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 40,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "decorators": [],
              "name": "blub",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "raw": "6",
              "value": 6
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 78,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 73,
              "decorators": [],
              "name": "blah",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 193,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 94,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 136,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 123,
                      "end": 135,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 171,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 145,
                      "end": 170,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 180,
                    "end": 187,
                    "expression": {
                      "type": "CallExpression",
                      "start": 180,
                      "end": 187,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 180,
                        "end": 185
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 95,
                  "end": 111,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 111,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 105,
                        "end": 111
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
