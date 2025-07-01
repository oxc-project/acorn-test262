__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
              },
              "start": 71,
              "end": 76
            },
            "start": 68,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 76
        }
      ],
      "declare": true,
      "start": 56,
      "end": 77
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 83
          },
          "start": 79,
          "end": 83
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 114
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 123
              },
              "typeArguments": null,
              "arguments": [],
              "start": 117,
              "end": 125
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 99,
            "end": 126
          }
        ],
        "start": 93,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 134
          },
          "start": 130,
          "end": 134
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 173
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 167,
                  "end": 175
                },
                "directive": null,
                "start": 167,
                "end": 176
              }
            ],
            "start": 150,
            "end": 182
          }
        ],
        "start": 144,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 184
}
```
