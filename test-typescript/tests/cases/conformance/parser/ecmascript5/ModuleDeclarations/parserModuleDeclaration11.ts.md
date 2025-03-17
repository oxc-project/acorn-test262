__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "name": "string",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                "name": "foo",
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
                  "start": 68,
                  "end": 77,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
            "name": "string",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 93,
            "end": 98,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 116,
            "name": "x",
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
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
