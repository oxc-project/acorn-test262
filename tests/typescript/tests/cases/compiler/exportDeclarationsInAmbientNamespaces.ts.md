__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_try",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 56
                    },
                    "typeArguments": null,
                    "start": 48,
                    "end": 56
                  },
                  "start": 46,
                  "end": 56
                },
                "start": 40,
                "end": 56
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 65
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 67,
                      "end": 70
                    },
                    "start": 67,
                    "end": 72
                  },
                  "start": 65,
                  "end": 72
                },
                "value": null,
                "start": 58,
                "end": 72
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              },
              "start": 73,
              "end": 78
            },
            "body": null,
            "expression": false,
            "start": 26,
            "end": 79
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_try",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 97
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "try",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 104
                },
                "exportKind": "value",
                "start": 93,
                "end": 104
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 84,
            "end": 107
          }
        ],
        "start": 20,
        "end": 109
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 109
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
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 111,
          "end": 116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 123,
              "end": 126
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 126
          }
        ],
        "optional": false,
        "start": 111,
        "end": 127
      },
      "directive": null,
      "start": 111,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
