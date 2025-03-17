__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "shortid",
        "raw": "\"shortid\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 52,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 38,
              "end": 52,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 146,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 75,
        "value": "shortid",
        "raw": "\"shortid\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 82,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 82,
        "object": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 111,
      "expression": {
        "type": "MemberExpression",
        "start": 106,
        "end": 111,
        "object": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
