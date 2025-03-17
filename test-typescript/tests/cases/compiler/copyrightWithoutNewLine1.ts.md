__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 89,
  "end": 237,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "name": "model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 104,
        "end": 124,
        "expression": {
          "type": "Literal",
          "start": 112,
          "end": 123,
          "value": "./greeter",
          "raw": "\"./greeter\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "name": "el",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 168,
            "callee": {
              "type": "MemberExpression",
              "start": 134,
              "end": 157,
              "object": {
                "type": "Identifier",
                "start": 134,
                "end": 142,
                "name": "document",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 143,
                "end": 157,
                "name": "getElementById",
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
                "start": 158,
                "end": 167,
                "value": "content",
                "raw": "'content'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 181,
            "name": "greeter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 184,
            "end": 205,
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 201,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 193,
                "name": "model",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 194,
                "end": 201,
                "name": "Greeter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 202,
                "end": 204,
                "name": "el",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 221,
        "end": 236,
        "callee": {
          "type": "MemberExpression",
          "start": 221,
          "end": 234,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 228,
            "name": "greeter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 234,
            "name": "start",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
