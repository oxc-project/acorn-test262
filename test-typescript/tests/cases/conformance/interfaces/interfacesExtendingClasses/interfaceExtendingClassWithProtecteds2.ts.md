interfaceExtendingClassWithProtecteds2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 36,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
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
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
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
      "type": "ClassDeclaration",
      "start": 40,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 76,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
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
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 122,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 101,
          "end": 104,
          "expression": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 106,
          "end": 109,
          "expression": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
        "decorators": [],
        "name": "I3",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 124,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 179,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 145,
          "end": 148,
          "expression": {
            "type": "Identifier",
            "start": 145,
            "end": 148,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 150,
          "end": 153,
          "expression": {
            "type": "Identifier",
            "start": 150,
            "end": 153,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "I4",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 183,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 219,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
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
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
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
        "start": 189,
        "end": 192,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 271,
      "body": {
        "type": "TSInterfaceBody",
        "start": 253,
        "end": 271,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 269,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 244,
          "end": 247,
          "expression": {
            "type": "Identifier",
            "start": 244,
            "end": 247,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 249,
          "end": 252,
          "expression": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
            "decorators": [],
            "name": "Baz",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "decorators": [],
        "name": "I5",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "decorators": [],
                  "name": "I5",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 297,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 300,
            "end": 303,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "decorators": [],
              "name": "z",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 311,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 314,
            "end": 317,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 340,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 337,
            "end": 340,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
