implementingAnInterfaceExtendingClassWithPrivates.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 34,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 80,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 78,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 117,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 103,
          "end": 104,
          "expression": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 168,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 167,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 161,
                "end": 167
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 129,
        "decorators": [],
        "name": "Bar2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 141,
          "end": 142,
          "expression": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 172,
      "end": 238,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 238,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 221,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 214,
                "end": 220
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 226,
            "end": 236,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "decorators": [],
        "name": "Bar3",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 194,
          "end": 195,
          "expression": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 240,
      "end": 314,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 279,
            "end": 297,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 312,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 305,
                "end": 311
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 250,
        "decorators": [],
        "name": "Bar4",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 262,
          "end": 263,
          "expression": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
