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
        "decorators": [],
        "name": "model",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "el",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "document",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 158,
                "decorators": [],
                "name": "getElementById",
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
                "start": 159,
                "end": 168,
                "value": "content",
                "raw": "'content'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 207,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 182,
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 202,
                "decorators": [],
                "name": "Greeter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
