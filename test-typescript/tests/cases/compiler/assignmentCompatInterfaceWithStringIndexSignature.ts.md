__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "IHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 38,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 37,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 63,
        "name": "IHandlerMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 97,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 70,
            "end": 95,
            "parameters": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 83,
                "name": "type",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 77,
                    "end": 83
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 94,
                  "name": "IHandler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 139,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "name": "Boz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 137,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 137,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 129,
                  "end": 133
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "name": "Biz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 154,
          "end": 170,
          "name": "map",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 170,
                "name": "IHandlerMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 192,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 191,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 180,
          "name": "Biz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 181,
            "end": 190,
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
