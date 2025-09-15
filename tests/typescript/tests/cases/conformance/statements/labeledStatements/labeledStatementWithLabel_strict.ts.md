__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 13,
        "end": 18
      },
      "body": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 31
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 34,
          "end": 37
        },
        "expression": false,
        "start": 20,
        "end": 37
      },
      "start": 13,
      "end": 37
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 43
      },
      "body": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 58
        },
        "generator": true,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 61,
          "end": 64
        },
        "expression": false,
        "start": 45,
        "end": 64
      },
      "start": 38,
      "end": 64
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 70
      },
      "body": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "gen1",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 91
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 94,
          "end": 97
        },
        "expression": false,
        "start": 72,
        "end": 97
      },
      "start": 65,
      "end": 97
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 103
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 111
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 112,
          "end": 114
        },
        "const": false,
        "declare": false,
        "start": 105,
        "end": 114
      },
      "start": 98,
      "end": 114
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 120
      },
      "body": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 133
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 134,
          "end": 136
        },
        "declare": false,
        "start": 122,
        "end": 136
      },
      "start": 115,
      "end": 136
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 142
      },
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 151
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 152,
          "end": 155
        },
        "abstract": false,
        "declare": false,
        "start": 144,
        "end": 155
      },
      "start": 137,
      "end": 155
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 161
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 171,
              "end": 172
            },
            "definite": false,
            "start": 167,
            "end": 172
          }
        ],
        "declare": false,
        "start": 163,
        "end": 173
      },
      "start": 156,
      "end": 173
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 179
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 189,
              "end": 190
            },
            "definite": false,
            "start": 185,
            "end": 190
          }
        ],
        "declare": false,
        "start": 181,
        "end": 191
      },
      "start": 174,
      "end": 191
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 197
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 209,
              "end": 210
            },
            "definite": false,
            "start": 205,
            "end": 210
          }
        ],
        "declare": false,
        "start": 199,
        "end": 211
      },
      "start": 192,
      "end": 211
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 218
      },
      "body": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 232,
          "end": 235
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 220,
        "end": 235
      },
      "start": 213,
      "end": 235
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 241
      },
      "body": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 255,
          "end": 257
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 243,
        "end": 257
      },
      "start": 236,
      "end": 257
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 263
      },
      "body": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 271
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 274,
          "end": 276
        },
        "declare": false,
        "start": 265,
        "end": 276
      },
      "start": 258,
      "end": 276
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
