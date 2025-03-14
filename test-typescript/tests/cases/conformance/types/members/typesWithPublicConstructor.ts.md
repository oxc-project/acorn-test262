typesWithPublicConstructor.ts
```json
{
  "type": "Program",
  "start": 61,
  "end": 304,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 99,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
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
              "start": 93,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 99,
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
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 111,
            "end": 118,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "start": 120,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 137,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 137,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 127,
                "end": 137,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 133,
                    "end": 137
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 140,
            "end": 153,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 142,
              "end": 153,
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
      "start": 156,
      "end": 238,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 238,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 201,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 189,
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
              "start": 189,
              "end": 201,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 199,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 193,
                      "end": 199
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 236,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 224,
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
              "start": 224,
              "end": 236,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 236,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 225,
                  "end": 231,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 228,
                      "end": 231
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
        "start": 162,
        "end": 164,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 257,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
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
      "start": 259,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 286,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 267,
                "end": 286,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 268,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 269,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 279,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 282,
                    "end": 286
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 303,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 289,
              "end": 291,
              "decorators": [],
              "name": "c2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 303,
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
