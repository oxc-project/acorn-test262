__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 109,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 109,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 26,
            "end": 79,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "_try",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 56,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 48,
                    "end": 56,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 56,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 58,
                "end": 72,
                "argument": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 65,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 67,
                    "end": 72,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 67,
                      "end": 70
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              }
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 84,
            "end": 107,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 93,
                "end": 104,
                "exported": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "try",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "_try",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 128,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 127,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 126,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 123,
              "end": 126,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 116,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 116,
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
