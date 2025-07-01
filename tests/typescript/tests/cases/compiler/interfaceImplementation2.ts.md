__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 24,
                "end": 27
              },
              "start": 23,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 37,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              },
              "start": 54,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 59
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 69,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 64,
            "end": 75
          }
        ],
        "start": 13,
        "end": 77
      },
      "declare": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 87
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "typeArguments": null,
          "start": 99,
          "end": 101
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 120,
                "end": 123
              },
              "start": 119,
              "end": 123
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 108,
            "end": 124
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              },
              "start": 140,
              "end": 147
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 129,
            "end": 148
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 165,
                "end": 168
              },
              "start": 164,
              "end": 168
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 153,
            "end": 169
          }
        ],
        "start": 102,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
