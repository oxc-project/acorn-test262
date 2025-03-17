__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 90,
  "end": 238,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 90,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "name": "model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 105,
        "end": 125,
        "expression": {
          "type": "Literal",
          "start": 113,
          "end": 124,
          "value": "./greeter",
          "raw": "\"./greeter\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "name": "el",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 169,
            "callee": {
              "type": "MemberExpression",
              "start": 135,
              "end": 158,
              "object": {
                "type": "Identifier",
                "start": 135,
                "end": 143,
                "name": "document",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 158,
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
                "start": 159,
                "end": 168,
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
      "start": 171,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 182,
            "name": "greeter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 185,
            "end": 206,
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 202,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 194,
                "name": "model",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 202,
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
                "start": 203,
                "end": 205,
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
      "start": 222,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 237,
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 235,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "name": "greeter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
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
