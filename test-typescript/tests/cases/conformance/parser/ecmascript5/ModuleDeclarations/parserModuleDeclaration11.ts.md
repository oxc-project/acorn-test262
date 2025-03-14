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
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 81,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 55,
              "end": 79,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
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
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "decorators": [],
        "name": "string",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 82,
        "end": 99,
        "arguments": [
          {
            "type": "Literal",
            "start": 93,
            "end": 98,
            "raw": "\"abc\"",
            "value": "abc"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 82,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 88,
            "decorators": [],
            "name": "string",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
