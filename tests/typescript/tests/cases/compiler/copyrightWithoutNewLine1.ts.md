__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "model",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 101
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./greeter",
          "raw": "\"./greeter\"",
          "start": 112,
          "end": 123
        },
        "start": 104,
        "end": 124
      },
      "importKind": "value",
      "start": 89,
      "end": 124
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
            "name": "el",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "document",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 142
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getElementById",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 134,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "content",
                "raw": "'content'",
                "start": 158,
                "end": 167
              }
            ],
            "optional": false,
            "start": 134,
            "end": 168
          },
          "definite": false,
          "start": 129,
          "end": 168
        }
      ],
      "declare": false,
      "start": 125,
      "end": 169
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
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 181
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 193
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Greeter",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 201
              },
              "optional": false,
              "computed": false,
              "start": 188,
              "end": 201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 204
              }
            ],
            "start": 184,
            "end": 205
          },
          "definite": false,
          "start": 174,
          "end": 205
        }
      ],
      "declare": false,
      "start": 170,
      "end": 206
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
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 221,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 221,
        "end": 236
      },
      "directive": null,
      "start": 221,
      "end": 237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 89,
  "end": 237
}
```
