__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 81,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 79,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 55,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
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
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 82,
        "end": 99,
        "callee": {
          "type": "MemberExpression",
          "start": 82,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 88,
            "decorators": [],
            "name": "string",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 93,
            "end": 98,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 117,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 116,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 108,
                  "end": 116,
                  "left": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 114,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
