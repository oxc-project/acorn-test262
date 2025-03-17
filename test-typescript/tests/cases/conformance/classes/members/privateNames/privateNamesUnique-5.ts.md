__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 168,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 70,
              "end": 74,
              "name": "foo"
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
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
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
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 108,
          "expression": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 128,
              "end": 132,
              "name": "foo"
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
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
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
      "start": 145,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "name": "b",
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
                  "name": "A2",
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
          "init": {
            "type": "NewExpression",
            "start": 159,
            "end": 166,
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
