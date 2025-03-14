__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 37,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 37,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 35,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": true,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 29,
                  "end": 35
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 34,
      "expression": {
        "type": "NewExpression",
        "start": 26,
        "end": 33,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 55,
            "properties": [
              {
                "type": "Property",
                "start": 48,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 65,
            "end": 70,
            "properties": [
              {
                "type": "Property",
                "start": 67,
                "end": 68,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
