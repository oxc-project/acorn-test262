__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 274,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "LabeledStatement",
      "start": 13,
      "end": 37,
      "body": {
        "type": "FunctionDeclaration",
        "start": 20,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 29,
          "end": 31,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 34,
          "end": 37,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "label": {
        "type": "Identifier",
        "start": 13,
        "end": 18,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 38,
      "end": 64,
      "body": {
        "type": "FunctionDeclaration",
        "start": 45,
        "end": 64,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "name": "gen",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": true,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 61,
          "end": 64,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "label": {
        "type": "Identifier",
        "start": 38,
        "end": 43,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 65,
      "end": 97,
      "body": {
        "type": "FunctionDeclaration",
        "start": 72,
        "end": 97,
        "id": {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "name": "gen1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 94,
          "end": 97,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "label": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 98,
      "end": 114,
      "body": {
        "type": "TSEnumDeclaration",
        "start": 105,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 112,
          "end": 114,
          "members": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 98,
        "end": 103,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 115,
      "end": 136,
      "body": {
        "type": "TSInterfaceDeclaration",
        "start": 122,
        "end": 136,
        "id": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 134,
          "end": 136,
          "body": []
        },
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 115,
        "end": 120,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 137,
      "end": 155,
      "body": {
        "type": "ClassDeclaration",
        "start": 144,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 152,
          "end": 155,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "label": {
        "type": "Identifier",
        "start": 137,
        "end": 142,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 156,
      "end": 173,
      "body": {
        "type": "VariableDeclaration",
        "start": 163,
        "end": 173,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 167,
            "end": 172,
            "id": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 171,
              "end": 172,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 156,
        "end": 161,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 174,
      "end": 191,
      "body": {
        "type": "VariableDeclaration",
        "start": 181,
        "end": 191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 190,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 189,
              "end": 190,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 174,
        "end": 179,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 192,
      "end": 211,
      "body": {
        "type": "VariableDeclaration",
        "start": 199,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 205,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 209,
              "end": 210,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 192,
        "end": 197,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 213,
      "end": 232,
      "body": {
        "type": "TSModuleDeclaration",
        "start": 220,
        "end": 232,
        "id": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 229,
          "end": 232,
          "body": []
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "label": {
        "type": "Identifier",
        "start": 213,
        "end": 218,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 233,
      "end": 254,
      "body": {
        "type": "TSModuleDeclaration",
        "start": 240,
        "end": 254,
        "id": {
          "type": "Identifier",
          "start": 250,
          "end": 251,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 252,
          "end": 254,
          "body": []
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "label": {
        "type": "Identifier",
        "start": 233,
        "end": 238,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 255,
      "end": 273,
      "body": {
        "type": "TSTypeAliasDeclaration",
        "start": 262,
        "end": 273,
        "id": {
          "type": "Identifier",
          "start": 267,
          "end": 268,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 271,
          "end": 273,
          "members": []
        },
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 255,
        "end": 260,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
