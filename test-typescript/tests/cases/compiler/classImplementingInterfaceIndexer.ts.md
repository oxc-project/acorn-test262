__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 45,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 43,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 32,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 35,
                "end": 43,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 37,
                    "end": 41,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 41,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 100,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 73,
            "end": 98,
            "parameters": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 87,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 90,
                "end": 98,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 92,
                    "end": 96,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 96,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 65,
          "end": 66,
          "expression": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
