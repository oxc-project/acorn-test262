__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 32,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 73,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 73,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 76,
      "end": 104,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 99,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 99,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 95,
              "end": 99,
              "literal": {
                "type": "Literal",
                "start": 95,
                "end": 99,
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 105,
      "end": 134,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 129,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 129,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 124,
              "end": 129,
              "literal": {
                "type": "Literal",
                "start": 124,
                "end": 129,
                "raw": "'bye'",
                "value": "bye"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 133,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 133,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 135,
      "end": 165,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 160,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 160,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 154,
              "end": 160
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 164,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 164,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 166,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 213,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 199,
            "end": 211,
            "argument": {
              "type": "Literal",
              "start": 206,
              "end": 210,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 188,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 188,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 185,
              "end": 188
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 189,
        "end": 192,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 191,
          "end": 192,
          "typeName": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
