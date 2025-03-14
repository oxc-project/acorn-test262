objectTypeHidingMembersOfObject.ts
```json
{
  "type": "Program",
  "start": 94,
  "end": 366,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 121,
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
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 147,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 147,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 161,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 159,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 159,
                "decorators": [],
                "name": "valueOf",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 164,
      "end": 200,
      "body": {
        "type": "TSInterfaceBody",
        "start": 176,
        "end": 200,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 182,
            "end": 198,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 189,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 197,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 193,
                "end": 197
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 224,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 224,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 220,
                "end": 224
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 227,
            "end": 238,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 227,
              "end": 236,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 229,
                "end": 236,
                "decorators": [],
                "name": "valueOf",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 249,
            "end": 275,
            "properties": [
              {
                "type": "Property",
                "start": 255,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 262,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 264,
                  "end": 273,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 270,
                    "end": 273,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 289,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 289,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 285,
                "end": 289
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 303,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 301,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "decorators": [],
                "name": "valueOf",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 337,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 313,
                "end": 337,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 319,
                    "end": 335,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 326,
                      "decorators": [],
                      "name": "valueOf",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 334,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 330,
                        "end": 334
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 351,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 351,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 347,
                "end": 351
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 354,
            "end": 365,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 354,
              "end": 363,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 363,
                "decorators": [],
                "name": "valueOf",
                "optional": false
              }
            },
            "optional": false
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
