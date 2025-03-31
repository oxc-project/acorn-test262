__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
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
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 50,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "name": "bar",
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
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "name": "k1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 72,
      "expression": {
        "type": "MemberExpression",
        "start": 65,
        "end": 71,
        "object": {
          "type": "Identifier",
          "start": 65,
          "end": 67,
          "name": "k1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "name": "foo",
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
      "start": 73,
      "end": 80,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 79,
        "object": {
          "type": "Identifier",
          "start": 73,
          "end": 75,
          "name": "k1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
          "name": "bar",
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
      "type": "VariableDeclaration",
      "start": 81,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 97,
            "name": "k2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 89,
                "end": 97,
                "exprName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 106,
      "expression": {
        "type": "MemberExpression",
        "start": 99,
        "end": 105,
        "object": {
          "type": "Identifier",
          "start": 99,
          "end": 101,
          "name": "k2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "name": "foo",
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
      "start": 107,
      "end": 114,
      "expression": {
        "type": "MemberExpression",
        "start": 107,
        "end": 113,
        "object": {
          "type": "Identifier",
          "start": 107,
          "end": 109,
          "name": "k2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 113,
          "name": "bar",
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
  "sourceType": "script",
  "hashbang": null
}
```
