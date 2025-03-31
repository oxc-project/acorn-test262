__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "C123",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 65,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 17,
            "end": 37,
            "parameters": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 27,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 63,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 63,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "ClassDeclaration",
      "start": 67,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 77,
        "name": "D123",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "name": "C123",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "x",
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
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "y",
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
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
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
