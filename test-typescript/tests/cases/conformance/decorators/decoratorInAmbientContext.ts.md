__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "name": "decorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 38,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 35,
              "end": 38
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 48,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 48,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 54,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 51,
          "end": 54
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 67,
            "end": 78,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 74,
                "end": 77,
                "value": "b",
                "raw": "'b'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 96,
                "end": 106,
                "expression": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 161,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 130,
                "end": 140,
                "expression": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
