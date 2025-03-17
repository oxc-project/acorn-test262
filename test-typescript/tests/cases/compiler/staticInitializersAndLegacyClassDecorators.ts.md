__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 185,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 76,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 126,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 114,
              "name": "instance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 117,
              "end": 125,
              "callee": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 79,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 83,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 184,
        "body": [
          {
            "type": "StaticBlock",
            "start": 150,
            "end": 182,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 167,
                "end": 176,
                "expression": {
                  "type": "NewExpression",
                  "start": 167,
                  "end": 175,
                  "callee": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 173,
                    "name": "C2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 130,
          "end": 134,
          "expression": {
            "type": "Identifier",
            "start": 131,
            "end": 134,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
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
