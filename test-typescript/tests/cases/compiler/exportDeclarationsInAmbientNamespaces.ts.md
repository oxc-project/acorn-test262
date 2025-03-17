__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "_try",
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
                "start": 40,
                "end": 56,
                "name": "method",
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
                      "name": "Function",
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
              {
                "type": "RestElement",
                "start": 58,
                "end": 72,
                "argument": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 65,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              }
            }
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
                  "name": "_try",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "name": "try",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 116,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 126,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 123,
              "end": 126,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
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
