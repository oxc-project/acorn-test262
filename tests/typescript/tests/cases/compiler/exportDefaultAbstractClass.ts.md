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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 32,
          "end": 46,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 34,
              "end": 44,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": true,
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 68,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 68,
        "body": []
      },
      "abstract": false,
      "declare": false
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 92,
            "decorators": [],
            "name": "toExponential",
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 42,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 42,
        "body": []
      },
      "abstract": false,
      "declare": false
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
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 66,
            "decorators": [],
            "name": "toExponential",
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
  "sourceType": "module",
  "hashbang": null
}
```
