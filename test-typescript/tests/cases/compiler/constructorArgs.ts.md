__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 26,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Options",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 84,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
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
              "start": 65,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 78,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 72,
                      "end": 78
                    }
                  }
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
        "start": 45,
        "end": 50,
        "decorators": [],
        "name": "Super",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 182,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 182,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 179,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 126,
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
              "start": 126,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 176,
                    "expression": {
                      "type": "CallExpression",
                      "start": 155,
                      "end": 175,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 161,
                          "end": 174,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 161,
                            "end": 168,
                            "decorators": [],
                            "name": "options",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 174,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 155,
                        "end": 160
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
                  "start": 127,
                  "end": 149,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 149,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 149,
                          "decorators": [],
                          "name": "Options",
                          "optional": false
                        }
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
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "Sub",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 111,
        "decorators": [],
        "name": "Super",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
