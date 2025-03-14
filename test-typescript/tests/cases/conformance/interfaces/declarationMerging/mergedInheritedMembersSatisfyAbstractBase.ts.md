mergedInheritedMembersSatisfyAbstractBase.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 383,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 52,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 29,
            "end": 50,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 24,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 87,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 66,
        "decorators": [],
        "name": "Broken",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 177,
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
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 174,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 168,
                "end": 174
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 158,
        "decorators": [],
        "name": "IGetters",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 214,
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 214,
        "body": []
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 194,
        "decorators": [],
        "name": "Broken",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 232,
      "expression": {
        "type": "MemberExpression",
        "start": 216,
        "end": 232,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 216,
          "end": 228,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 220,
            "end": 226,
            "decorators": [],
            "name": "Broken",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 229,
          "end": 232,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 234,
      "end": 279,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 279,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 258,
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 267,
        "end": 276,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 280,
      "end": 325,
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
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 314,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 306,
        "decorators": [],
        "name": "IncorrectGetters",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 326,
      "end": 382,
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 382,
        "body": []
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 354,
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
