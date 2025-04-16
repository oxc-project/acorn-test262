__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "name": "valueOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 121,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "name": "c",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 147,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 147,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 161,
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 159,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 159,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 164,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 176,
        "end": 200,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 182,
            "end": 198,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 189,
              "name": "valueOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 224,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 224,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 220,
                "end": 224
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 227,
            "end": 238,
            "callee": {
              "type": "MemberExpression",
              "start": 227,
              "end": 236,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 229,
                "end": 236,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 262,
                  "name": "valueOf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 264,
                  "end": 273,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 270,
                    "end": 273,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 289,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 289,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 285,
                "end": 289
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 303,
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 301,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 337,
            "name": "b",
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
                    "key": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 326,
                      "name": "valueOf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 351,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 351,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 347,
                "end": 351
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 354,
            "end": 365,
            "callee": {
              "type": "MemberExpression",
              "start": 354,
              "end": 363,
              "object": {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 363,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
