__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 382,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 24,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 52,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 29,
            "end": 50,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
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
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 87,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 66,
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 87,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 158,
        "decorators": [],
        "name": "IGetters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 159,
        "end": 177,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 175,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 174,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 168,
                "end": 174
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 194,
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 203,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 203,
            "end": 211,
            "decorators": [],
            "name": "IGetters",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 214,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 232,
      "expression": {
        "type": "MemberExpression",
        "start": 216,
        "end": 232,
        "object": {
          "type": "NewExpression",
          "start": 216,
          "end": 228,
          "callee": {
            "type": "Identifier",
            "start": 220,
            "end": 226,
            "decorators": [],
            "name": "Broken",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 229,
          "end": 232,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 234,
      "end": 279,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 258,
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 267,
        "end": 276,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 279,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 280,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 306,
        "decorators": [],
        "name": "IncorrectGetters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 314,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 326,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 354,
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 363,
          "end": 379,
          "expression": {
            "type": "Identifier",
            "start": 363,
            "end": 379,
            "decorators": [],
            "name": "IncorrectGetters",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 382,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
