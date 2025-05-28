__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 167,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 85,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
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
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 70,
              "end": 74,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 108,
          "expression": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 112,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 143,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 141,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 128,
              "end": 132,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 167,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 159,
            "end": 166,
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
