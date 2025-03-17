__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 32,
          "end": 46,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 34,
              "end": 44,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": true,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 68,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 94,
        "callee": {
          "type": "MemberExpression",
          "start": 69,
          "end": 92,
          "object": {
            "type": "MemberExpression",
            "start": 69,
            "end": 78,
            "object": {
              "type": "NewExpression",
              "start": 69,
              "end": 76,
              "callee": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 92,
            "name": "toExponential",
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 42,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 68,
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 66,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 52,
            "object": {
              "type": "NewExpression",
              "start": 43,
              "end": 50,
              "callee": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 66,
            "name": "toExponential",
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
  "sourceType": "module",
  "hashbang": null
}
```
