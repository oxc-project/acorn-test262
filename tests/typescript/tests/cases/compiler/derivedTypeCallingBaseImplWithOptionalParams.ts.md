__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 36
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 46
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    },
                    "start": 48,
                    "end": 53
                  },
                  "start": 46,
                  "end": 53
                },
                "value": null,
                "start": 37,
                "end": 53
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 55
          }
        ],
        "start": 22,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 71
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 94
          },
          "typeArguments": null,
          "start": 83,
          "end": 94
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 109
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
                      },
                      "start": 118,
                      "end": 123
                    },
                    "start": 116,
                    "end": 123
                  },
                  "start": 110,
                  "end": 123
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 125,
                "end": 141
              },
              "expression": false,
              "start": 109,
              "end": 141
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 141
          }
        ],
        "start": 95,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 163
                },
                "typeArguments": null,
                "start": 152,
                "end": 163
              },
              "start": 150,
              "end": 163
            },
            "start": 149,
            "end": 163
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 166,
            "end": 179
          },
          "definite": false,
          "start": 149,
          "end": 179
        }
      ],
      "declare": false,
      "start": 145,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "myMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 181,
        "end": 193
      },
      "directive": null,
      "start": 181,
      "end": 194
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 278
                },
                "typeArguments": null,
                "start": 271,
                "end": 278
              },
              "start": 269,
              "end": 278
            },
            "start": 268,
            "end": 278
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 292
            },
            "typeArguments": null,
            "arguments": [],
            "start": 281,
            "end": 294
          },
          "definite": false,
          "start": 268,
          "end": 294
        }
      ],
      "declare": false,
      "start": 264,
      "end": 295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "myMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 306
          },
          "optional": false,
          "computed": false,
          "start": 296,
          "end": 306
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 296,
        "end": 308
      },
      "directive": null,
      "start": 296,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
