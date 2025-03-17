__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 32,
      "expression": {
        "type": "CallExpression",
        "start": 13,
        "end": 31,
        "callee": {
          "type": "MemberExpression",
          "start": 13,
          "end": 29,
          "object": {
            "type": "TSTypeAssertion",
            "start": 14,
            "end": 19,
            "expression": {
              "type": "ObjectExpression",
              "start": 17,
              "end": 19,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 15,
              "end": 16,
              "typeName": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 29,
            "name": "toString",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 72,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 71,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 35,
          "end": 68,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 68,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 47,
                "end": 66,
                "expression": {
                  "type": "CallExpression",
                  "start": 47,
                  "end": 65,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 47,
                    "end": 63,
                    "object": {
                      "type": "TSTypeAssertion",
                      "start": 48,
                      "end": 53,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 51,
                        "end": 53,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 49,
                        "end": 50,
                        "typeName": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 50,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 63,
                      "name": "toString",
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
                "directive": null
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
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
