__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 38,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 35,
              "end": 38
            }
          }
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 48,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 48,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 54,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 51,
          "end": 54
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 79,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 67,
            "end": 78,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 74,
                "end": 77,
                "value": "b",
                "raw": "'b'"
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
      "type": "ClassDeclaration",
      "start": 80,
      "end": 163,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 125,
            "decorators": [
              {
                "type": "Decorator",
                "start": 96,
                "end": 106,
                "expression": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 118,
                "end": 124
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 161,
            "decorators": [
              {
                "type": "Decorator",
                "start": 130,
                "end": 140,
                "expression": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
