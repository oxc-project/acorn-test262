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
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 31,
            "end": 46
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 70
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 74,
                      "end": 80
                    },
                    "start": 72,
                    "end": 80
                  },
                  "start": 71,
                  "end": 80
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 58,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 82
          }
        ],
        "start": 25,
        "end": 84
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 84
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
            "name": "string",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 85,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 96,
            "end": 101
          }
        ],
        "optional": false,
        "start": 85,
        "end": 102
      },
      "directive": null,
      "start": 85,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 117
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "start": 111,
                  "end": 119
                },
                "typeArguments": null,
                "start": 111,
                "end": 119
              },
              "start": 109,
              "end": 119
            },
            "start": 108,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 119
        }
      ],
      "declare": false,
      "start": 104,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
