__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 11,
      "end": 12
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 43,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 43,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 30,
              "end": 43,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 31,
                  "end": 42,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 41,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 56,
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
