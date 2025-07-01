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
        "start": 97,
        "end": 102
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./greeter",
          "raw": "\"./greeter\"",
          "start": 113,
          "end": 124
        },
        "start": 105,
        "end": 125
      },
      "importKind": "value",
      "start": 90,
      "end": 125
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
            "start": 130,
            "end": 132
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
                "start": 135,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getElementById",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 135,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "content",
                "raw": "'content'",
                "start": 159,
                "end": 168
              }
            ],
            "optional": false,
            "start": 135,
            "end": 169
          },
          "definite": false,
          "start": 130,
          "end": 169
        }
      ],
      "declare": false,
      "start": 126,
      "end": 170
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
            "start": 175,
            "end": 182
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
                "start": 189,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Greeter",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 202
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 205
              }
            ],
            "start": 185,
            "end": 206
          },
          "definite": false,
          "start": 175,
          "end": 206
        }
      ],
      "declare": false,
      "start": 171,
      "end": 207
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
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 235
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 222,
        "end": 237
      },
      "directive": null,
      "start": 222,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 238
}
```
