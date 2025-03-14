subtypingWithObjectMembersAccessibility.ts
```json
{
  "type": "Program",
  "start": 64,
  "end": 426,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 93,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
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
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 142,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
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
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
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
        "start": 103,
        "end": 110,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 179,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 177,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 176,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
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
        "start": 152,
        "end": 153,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 199,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 226,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 225,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
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
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 239,
      "end": 272,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 248,
        "end": 272,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 254,
            "end": 269,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 261,
              "end": 262,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
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
        "start": 245,
        "end": 247,
        "decorators": [],
        "name": "A2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 274,
      "end": 330,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 294,
        "end": 330,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 300,
            "end": 319,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 311,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 318,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
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
        "start": 280,
        "end": 282,
        "decorators": [],
        "name": "B2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 291,
        "end": 293,
        "decorators": [],
        "name": "A2",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 332,
      "end": 366,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 341,
        "end": 366,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 364,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 354,
              "end": 357,
              "raw": "'1'",
              "value": "1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
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
        "start": 338,
        "end": 340,
        "decorators": [],
        "name": "A3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 368,
      "end": 426,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 394,
            "end": 415,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 402,
              "end": 405,
              "raw": "'1'",
              "value": "1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 414,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 414,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
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
        "start": 374,
        "end": 376,
        "decorators": [],
        "name": "B3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 385,
        "end": 387,
        "decorators": [],
        "name": "A3",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
