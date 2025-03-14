decoratorOnClassConstructorParameter5.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 336,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 74,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 70,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 98,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 98,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 336,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 336,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 186,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "Schema",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 185,
              "raw": "'vscode-bulkeditpreview'",
              "value": "vscode-bulkeditpreview"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 256,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 210,
              "decorators": [],
              "name": "emptyPreview",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ObjectExpression",
              "start": 213,
              "end": 255,
              "properties": [
                {
                  "type": "Property",
                  "start": 215,
                  "end": 253,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 221,
                    "decorators": [],
                    "name": "scheme",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 253,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 246,
                      "decorators": [],
                      "name": "BulkEditPreviewProvider",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 253,
                      "decorators": [],
                      "name": "Schema",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 334,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 272,
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
              "start": 272,
              "end": 334,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 282,
                  "end": 323,
                  "accessibility": "private",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 282,
                      "end": 287,
                      "expression": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 287,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false
                      }
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 323,
                    "decorators": [],
                    "name": "_modeService",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 323,
                        "typeName": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 323,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": true,
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
        "start": 106,
        "end": 129,
        "decorators": [],
        "name": "BulkEditPreviewProvider",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
