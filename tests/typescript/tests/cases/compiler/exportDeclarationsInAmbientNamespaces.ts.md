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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 109,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 26,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "_try",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 56,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 58,
                "end": 72,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 65,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "body": null,
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 84,
            "end": 107,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 93,
                "end": 104,
                "local": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "_try",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "try",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 127,
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 116,
          "object": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 116,
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 126,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 123,
              "end": 126,
              "body": []
            },
            "id": null,
            "generator": false
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
