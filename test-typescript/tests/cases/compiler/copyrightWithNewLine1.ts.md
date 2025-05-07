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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 105,
        "end": 125,
        "expression": {
          "type": "Literal",
          "start": 113,
          "end": 124,
          "raw": "\"./greeter\"",
          "value": "./greeter",
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 159,
                "end": 168,
                "raw": "'content'",
                "value": "content",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 135,
              "end": 158,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 135,
                "end": 143,
                "decorators": [],
                "name": "document",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 158,
                "decorators": [],
                "name": "getElementById",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 202,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 194,
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 202,
                "decorators": [],
                "name": "Greeter",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 237,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
