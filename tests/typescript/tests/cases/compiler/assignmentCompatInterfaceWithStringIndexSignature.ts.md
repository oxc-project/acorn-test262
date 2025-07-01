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
        "name": "IHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              },
              "start": 28,
              "end": 37
            },
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHandlerMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 77,
                    "end": 83
                  },
                  "start": 75,
                  "end": 83
                },
                "start": 71,
                "end": 83
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHandler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 94
                },
                "typeArguments": null,
                "start": 86,
                "end": 94
              },
              "start": 84,
              "end": 94
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 70,
            "end": 95
          }
        ],
        "start": 64,
        "end": 97
      },
      "declare": false,
      "start": 42,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Boz",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 129,
                  "end": 133
                },
                "start": 127,
                "end": 133
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 134,
                "end": 137
              },
              "expression": false,
              "start": 125,
              "end": 137
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 115,
            "end": 137
          }
        ],
        "start": 109,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Biz",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 153
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IHandlerMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 170
              },
              "typeArguments": null,
              "start": 159,
              "end": 170
            },
            "start": 157,
            "end": 170
          },
          "start": 154,
          "end": 170
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 172,
        "end": 175
      },
      "expression": false,
      "start": 141,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Biz",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "typeArguments": null,
            "arguments": [],
            "start": 181,
            "end": 190
          }
        ],
        "optional": false,
        "start": 177,
        "end": 191
      },
      "directive": null,
      "start": 177,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
