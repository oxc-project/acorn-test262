__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 40,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
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
      "type": "ClassDeclaration",
      "start": 44,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 196,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 131,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 130,
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 201,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 211,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 220,
        "end": 224,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 225,
        "end": 310,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 252,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 250,
              "end": 251,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 308,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 268,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 268,
              "end": 308,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 308,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 281,
                    "end": 293,
                    "expression": {
                      "type": "CallExpression",
                      "start": 281,
                      "end": 292,
                      "callee": {
                        "type": "Super",
                        "start": 281,
                        "end": 286
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 287,
                          "end": 291
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
