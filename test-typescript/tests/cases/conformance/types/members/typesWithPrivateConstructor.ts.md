typesWithPrivateConstructor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 41,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 39,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
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
              "start": 33,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 39,
                "body": []
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 51,
            "end": 58,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 99,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 99,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 89,
                "end": 99,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 95,
                    "end": 99
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 102,
            "end": 115,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 164,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 152,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 152,
              "end": 164,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 153,
                  "end": 162,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 156,
                      "end": 162
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 200,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 188,
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
              "start": 188,
              "end": 200,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 200,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 195,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 192,
                      "end": 195
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
        "start": 124,
        "end": 126,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 210,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 213,
            "end": 221,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 217,
              "end": 219,
              "decorators": [],
              "name": "C2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 273,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 273,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 254,
                "end": 273,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 264,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 258,
                        "end": 264
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 269,
                    "end": 273
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 276,
            "end": 290,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 276,
              "end": 278,
              "decorators": [],
              "name": "c2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 279,
              "end": 290,
              "decorators": [],
              "name": "constructor",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
