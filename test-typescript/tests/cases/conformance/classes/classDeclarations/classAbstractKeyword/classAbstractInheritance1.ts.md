__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 286,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 19,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 50,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 50,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 72,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 115,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 115,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 98,
            "end": 113,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 110,
              "end": 113,
              "async": false,
              "body": null,
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
        "start": 89,
        "end": 91,
        "decorators": [],
        "name": "AA",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 148,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 148,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 134,
        "decorators": [],
        "name": "BB",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 143,
        "end": 145,
        "decorators": [],
        "name": "AA",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 172,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "CC",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "AA",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 196,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 182,
        "decorators": [],
        "name": "DD",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "decorators": [],
        "name": "BB",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 229,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 229,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 215,
        "decorators": [],
        "name": "EE",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "BB",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 253,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 251,
        "end": 253,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 239,
        "decorators": [],
        "name": "FF",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 248,
        "end": 250,
        "decorators": [],
        "name": "CC",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 255,
      "end": 286,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 284,
        "end": 286,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 272,
        "decorators": [],
        "name": "GG",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "decorators": [],
        "name": "CC",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
