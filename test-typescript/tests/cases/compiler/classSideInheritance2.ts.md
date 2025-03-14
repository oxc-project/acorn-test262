classSideInheritance2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
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
        "end": 15,
        "decorators": [],
        "name": "IText",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 59,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 56,
        "decorators": [],
        "name": "TextSpan",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 176,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 114,
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
              "start": 114,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 166,
                    "expression": {
                      "type": "CallExpression",
                      "start": 158,
                      "end": 165,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
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
                  "type": "Identifier",
                  "start": 115,
                  "end": 126,
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 126,
                        "decorators": [],
                        "name": "IText",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 142,
                  "decorators": [],
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 142,
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false
                      }
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
        "start": 67,
        "end": 74,
        "decorators": [],
        "name": "SubText",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "decorators": [],
        "name": "TextBase",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 346,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 222,
            "end": 241,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 240,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 234,
                "end": 240
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 344,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 264,
              "decorators": [],
              "name": "subText",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 334,
                    "argument": {
                      "type": "NewExpression",
                      "start": 310,
                      "end": 333,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 322,
                          "end": 326
                        },
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 332,
                          "decorators": [],
                          "name": "span",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 321,
                        "decorators": [],
                        "name": "SubText",
                        "optional": false
                      }
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
                  "type": "Identifier",
                  "start": 265,
                  "end": 279,
                  "decorators": [],
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 279,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 279,
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 280,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 287,
                    "decorators": [],
                    "name": "IText",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 194,
        "decorators": [],
        "name": "TextBase",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 206,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 206,
            "end": 211,
            "decorators": [],
            "name": "IText",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
