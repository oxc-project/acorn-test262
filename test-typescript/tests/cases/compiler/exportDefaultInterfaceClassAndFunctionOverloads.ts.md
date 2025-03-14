exportDefaultInterfaceClassAndFunctionOverloads.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 15,
        "end": 50,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 28,
            "end": 41,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 50,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 44,
            "end": 50
          }
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 51,
      "end": 101,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 66,
        "end": 101,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 92,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 93,
          "end": 101,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 95,
            "end": 101
          }
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 102,
      "end": 187,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 117,
        "end": 187,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 171,
          "end": 187,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 177,
              "end": 185,
              "argument": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 129,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 130,
            "end": 152,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 152,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 137,
                "end": 152,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 137,
                    "end": 143
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 153,
          "end": 170,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 155,
            "end": 170,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            ]
          }
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 208,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 208,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 205,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 209,
      "end": 227,
      "declaration": {
        "type": "Identifier",
        "start": 224,
        "end": 227,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 228,
      "end": 259,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 243,
        "end": 259,
        "body": {
          "type": "TSInterfaceBody",
          "start": 257,
          "end": 259,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 253,
          "end": 256,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
