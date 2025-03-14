privateNamesConstructorChain-2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 26,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "raw": "5",
              "value": 5
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 238,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 73,
              "decorators": [],
              "name": "accessChildProps",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 238,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 238,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 111,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 86,
                      "end": 110,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 86,
                        "end": 105,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 95,
                          "decorators": [],
                          "name": "Child",
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 95,
                          "end": 103,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 96,
                              "end": 102
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 106,
                        "end": 110,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 206,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 205,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 200,
                        "decorators": [],
                        "name": "Child",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 201,
                        "end": 205,
                        "name": "bar"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 411,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 411,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 294,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 281,
              "end": 285,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 288,
              "end": 293,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 384,
            "end": 397,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 384,
              "end": 388,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 396,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 253,
        "decorators": [],
        "name": "Child",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 271,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 272,
            "end": 273,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 255,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 453,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 452,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 413,
          "end": 450,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 413,
            "end": 433,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 423,
              "decorators": [],
              "name": "Parent",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 431,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 424,
                  "end": 430
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "decorators": [],
            "name": "accessChildProps",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
